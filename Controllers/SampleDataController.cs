using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using case12M.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace case12M.Controllers
{

    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet(Name = "Get Data's")]
        [Route("GetSampleData")]
        public object Get(DataSourceLoadOptions loadOptions,DateTime BaslangicTarih, DateTime BitisTarih,string MalKodu)
        {
            using (var context = new CaseContext())
            {
                string sql;
                if (!String.IsNullOrEmpty(MalKodu))
                {
                    sql = $"execute dbo.Ekstre @BaslangicTarih='{BaslangicTarih.ToString("yyyy-MM-dd")}', @BitisTarih='{BitisTarih.ToString("yyyy-MM-dd")}',@MalKoduGelen='{MalKodu}'";
                }
                else
                {
                    sql = $"execute dbo.Ekstre @BaslangicTarih='{BaslangicTarih.ToString("yyyy-MM-dd")}', @BitisTarih='{BitisTarih.ToString("yyyy-MM-dd")}'";
                }
                var spmodel = context.Ekstre.FromSql(sql).ToList();
                return DataSourceLoader.Load(spmodel, loadOptions);
            }

           
        }

        [HttpGet(Name = "Get MalAdi")]
        [Route("GetMalAdi")]
        public async System.Threading.Tasks.Task<object> GetMalAdiAsync(DataSourceLoadOptions loadOptions)
        {
            List<STK> model = new List<STK>();
            using (var context = new CaseContext())
            {
                model = await context.STK.AsNoTracking().ToListAsync();
            }
            return DataSourceLoader.Load(model, loadOptions);
        }


    }
}