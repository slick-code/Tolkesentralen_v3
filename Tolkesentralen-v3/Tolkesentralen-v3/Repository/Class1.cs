using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

namespace Tolkesentralen_v3.Repository
{
    public class Class1
    {
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Default constructor. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public Class1()
        {
            string[] lines = new string[140];
            string relativePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Repository\SpraakListe.txt");
            string toPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Repository\ny.txt");

            string line;
            StreamReader file = new StreamReader(relativePath);
            int i = 1;

            while ((line = file.ReadLine()) != null)
            {
                lines[i - 1] = "{ 'id': " + i + ", 'spraak': '" + line + "' },";
                i++;
            }
            file.Close();
            File.WriteAllLines(toPath, lines, Encoding.UTF8);
        }
    }
}