using boardwalk.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.Json;
using System;
using System.Diagnostics;

namespace boardwalk.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class OrderController : ControllerBase
    {

        private readonly ILogger<OrderController> _logger;
        private readonly StoreDbContext _context;

        public OrderController(StoreDbContext dbContext, ILogger<OrderController> logger)
        {
            _logger = logger;
            _context = dbContext;
        }

        [HttpGet]
        public async Task<IEnumerable<Order>> GetAllOrders()
        {
            var orders = await _context.Orders.ToListAsync();

            foreach (var order in orders)
            {
                order.CartItems = JsonSerializer.Deserialize<CartItem[]>(order.Cart_string);
            }
            return orders;
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var todoItem = await _context.Orders.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {

            try
            {
                order.Cart_string = JsonSerializer.Serialize(order.CartItems);
                _context.Orders.Add(order);
                await _context.SaveChangesAsync();
                Debug.WriteLine("Success");
                _logger.LogInformation("Successfully saved order");
                return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order); ;
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                _logger.LogError(e.Message);
                return StatusCode(500);
            }

        }
    }
}
