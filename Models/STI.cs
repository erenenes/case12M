using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace case12M.Models
{
    public class STI
    {
        public int ID { get; set; }
        public Int16 IslemTur { get; set; }
        public string EvrakNo { get; set; }
        public int Tarih{ get; set; }
        public string MalKodu { get; set; }
        public decimal Miktar { get; set; }
        public decimal Fiyat { get; set; }
        public decimal Tutar { get; set; }
        public string Birim { get; set; }
    }
}
