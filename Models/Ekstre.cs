using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace case12M.Models
{
    public class Ekstre
    {
        [Key]
        public int SiraNo { get; set; }
        public string IslemTur { get; set; }
        public string EvrakNo { get; set; }
        public DateTime Tarih { get; set; }
        public decimal GirisMiktar { get; set; }
        public decimal CikisMiktar { get; set; }
        public decimal Stok { get; set; }
        public string MalKodu { get; set; }
    }
}
