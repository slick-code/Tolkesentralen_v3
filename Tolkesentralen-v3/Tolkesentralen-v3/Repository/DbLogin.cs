using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace Tolkesentralen_v3.Repository
{
    public class DbLogin
    {


        /********************** Sikkerhets hjelp ***********************/

        public byte[] lagHash(string innStreng)
        {
            byte[] innData, utData;

            var algoritme = SHA512.Create();
            innData = Encoding.UTF8.GetBytes(innStreng);
            utData = algoritme.ComputeHash(innData);
            return utData;
        }

        public string lagSalt()
        {
            byte[] randomArray = new byte[10];
            string randomString;

            var strg = new RNGCryptoServiceProvider();
            strg.GetBytes(randomArray);
            randomString = Convert.ToBase64String(randomArray);
            return randomString;
        }
    }
}