using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace case12M.Models
{
    public class FilterModel
    {
        public string MalKodu { get; set; }
        public DateTime BaslangicTarih { get; set; }
        public DateTime BitisTarih { get; set; }
    }
}
