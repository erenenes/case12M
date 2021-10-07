using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace case12M.Models
{
    public class CaseContext:DbContext
    {
        //public CaseContext(DbContextOptions<CaseContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=DESKTOP-DEJ974U\\SQLEXPRESS;Initial Catalog=TEST;Integrated Security=True");
        }

        public DbSet<STK> STK { get; set; }
        public DbSet<STI> STI { get; set; }
        public DbSet<Ekstre> Ekstre { get; set; }
    }
}
