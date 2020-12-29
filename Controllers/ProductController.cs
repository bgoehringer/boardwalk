using boardwalk.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace boardwalk.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductController : ControllerBase
    {

        private readonly ILogger<ProductController> _logger;
        private readonly StoreDbContext _context;

        public ProductController(StoreDbContext dbContext, ILogger<ProductController> logger)
        {
            _logger = logger;
            _context = dbContext;
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> Get(string searchTerm)
        {
            var products = _context.Products.AsQueryable();

            if (searchTerm != "" && searchTerm != null)
            {
                string lowerSearchString = searchTerm.ToLower();
                products = products.Where((product) => product.Name.ToLower().Contains(lowerSearchString) || product.Description.ToLower().Contains(lowerSearchString));
            }

            var value = await products.ToListAsync();

            return await products.ToListAsync();
        }
    }
}
