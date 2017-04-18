using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.Models
{
    public class DbNetcont:DbContext
    {

        public DbNetcont() : base("TolkesentralenDb")
        {
<<<<<<< HEAD
            //Database.CreateIfNotExists();
            Database.SetInitializer(new DBContextInitializer());
=======
            Database.CreateIfNotExists();
           // Database.SetInitializer(new DBContextInitializer());
>>>>>>> d082b1c34559208235c17d74a421caf158801802
        }

        // public DbSet<Oppdrag> Oppdrager { get; set; }

        public DbSet<Person> Personer { get; set; }
        public DbSet<Spraak> Spraak { get; set; }
        public DbSet<Poststed> Poststeder { get; set; }
        public DbSet<Oppdrag> Oppdrag { get; set; }
        public DbSet<Fil> Filer { get; set; }
        public DbSet<Foresporsler> foresporelse { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            
        }

    }
}