using boardwalk.Models;
using Microsoft.EntityFrameworkCore;

public class StoreDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }

    public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<Product>().HasData(
            new Product
            {
                Id = 1,
                Name = "Apple",
                Description = "A crisp, tasty apple",
                Price = 3.45,
                ImageUrl = "apple.jpg",
            },
            new Product
            {
                Id = 2,
                Name = "Banana",
                Description = "A banana",
                Price = 2.85,
                ImageUrl = "banana.jpg",
            },
            new Product
            {
                Id = 3,
                Name = "Car",
                Description = "A super fast car",
                Price = 345.0,
                ImageUrl = "car.jpg",
            },
            new Product
            {
                Id = 4,
                Name = "Dice",
                Description = "A set of dice",
                Price = 5.67,
                ImageUrl = "dice.jpg",
            },
            new Product
            {
                Id = 5,
                Name = "Eraser",
                Description = "Erase your mistakes with ease!",
                Price = 0.67,
                ImageUrl = "eraser.jpg",
            },
            new Product
            {
                Id = 6,
                Name = "Frisbee",
                Description = "Fun for everyone",
                Price = 3.33,
                ImageUrl = "frisbee.jpg",
            },
            new Product
            {
                Id = 7,
                Name = "Glasses",
                Description = "For all your seeing needs",
                Price = 89.0,
                ImageUrl = "glasses.jpg",
            },
            new Product
            {
                Id = 8,
                Name = "Hat",
                Description = "Goes with any outfit",
                Price = 34.29,
                ImageUrl = "hat.jpg",
            },
            new Product
            {
                Id = 9,
                Name = "Ice Cream",
                Description = "Satisfy your sweet tooth",
                Price = 8.95,
                ImageUrl = "ice_cream.jpg",
            },
            new Product
            {
                Id = 10,
                Name = "Jeans",
                Description = "Wear them on your legs",
                Price = 12.53,
                ImageUrl = "jeans.jpg",
            },
            new Product
            {
                Id = 11,
                Name = "Kite",
                Description = "Great for a windy day",
                Price = 12.53,
                ImageUrl = "kite.jpg",
            },
            new Product
            {
                Id = 12,
                Name = "Light Bulb",
                Description = "Brighten your day",
                Price = 1.12,
                ImageUrl = "light_bulb.jpg",
            },
            new Product
            {
                Id = 13,
                Name = "Maple Syrup",
                Description = "In case the ice cream wasn't sweet enough",
                Price = 6.73,
                ImageUrl = "maple_syrup.jpg",
            },
            new Product
            {
                Id = 14,
                Name = "Nail Polish",
                Description = "Jazz up your digits",
                Price = 4.55,
                ImageUrl = "nail_polish.jpg",
            },
            new Product
            {
                Id = 15,
                Name = "Orange",
                Description = "The fruit or the color?",
                Price = 1.89,
                ImageUrl = "orange.jpg",
            },
            new Product
            {
                Id = 16,
                Name = "Piano",
                Description = "Tickle the ivories",
                Price = 225.66,
                ImageUrl = "piano.jpg",
            },
            new Product
            {
                Id = 17,
                Name = "Quilt",
                Description = "Keep warm this winter",
                Price = 17.34,
                ImageUrl = "quilt.jpg",
            },
            new Product
            {
                Id = 18,
                Name = "Running Shoes",
                Description = "Protect your feet",
                Price = 90.99,
                ImageUrl = "running_shoes.jpg",
            },
            new Product
            {
                Id = 19,
                Name = "Spray Gun",
                Description = "Stay cool this summer",
                Price = 24.99,
                ImageUrl = "spray_gun.jpg",
            },
            new Product
            {
                Id = 20,
                Name = "Tea",
                Description = "Drink it hot or cold",
                Price = 18.89,
                ImageUrl = "tea.jpg",
            },
            new Product
            {
                Id = 21,
                Name = "Underwear",
                Description = "Wear them under your jeans",
                Price = 6.12,
                ImageUrl = "underwear.jpg",
            },
            new Product
            {
                Id = 22,
                Name = "Violin",
                Description = "Make sure to practice",
                Price = 125.34,
                ImageUrl = "violin.jpg",
            },
            new Product
            {
                Id = 23,
                Name = "Wagon",
                Description = "Great for kids!",
                Price = 67.54,
                ImageUrl = "wagon.jpg",
            },
            new Product
            {
                Id = 24,
                Name = "Xylophone",
                Description = "For beginners!",
                Price = 75.75,
                ImageUrl = "xylophone.jpg",
            },
            new Product
            {
                Id = 25,
                Name = "Yarn",
                Description = "Sewing, knitting, or weaving",
                Price = 4.67,
                ImageUrl = "yarn.jpg",
            },
            new Product
            {
                Id = 26,
                Name = "Zamboni??",
                Description = "Really reaching for ideas here",
                Price = 1001.1,
                ImageUrl = "zamboni.jpg",
            }
        );
    }

}