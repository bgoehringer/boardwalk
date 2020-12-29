using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace boardwalk.Models
{
    [NotMapped]
    public class CartItem
    {
        public int Quantity { get; set; }
        public Product Product { get; set; }
    }

    public class Order
    {
        public int Id { get; set; }

        [NotMapped]
        public CartItem[] CartItems { get; set; }

        public string Cart_string { get; set; }

        public double Total { get; set; }
    }

}
