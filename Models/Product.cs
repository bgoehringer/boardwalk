using System;

namespace boardwalk.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string ImageUrl { get; set; }

        public override string ToString()
        {
            return $"{Name} - {Description}";
        }
    }
}
