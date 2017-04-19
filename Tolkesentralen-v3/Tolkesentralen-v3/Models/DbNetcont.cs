﻿using System;
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
           bool ok = Database.CreateIfNotExists();
            
           //Database.SetInitializer(new DBContextInitializer());
           
           

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