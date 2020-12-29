using Microsoft.EntityFrameworkCore.Migrations;

namespace boardwalk.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Cart_string = table.Column<string>(type: "TEXT", nullable: true),
                    Total = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    Price = table.Column<double>(type: "REAL", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 1, "A crisp, tasty apple", "apple.jpg", "Apple", 3.4500000000000002 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 24, "For beginners!", "https://plchldr.co/i/300x200", "Xylophone", 75.75 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 23, "Great for kids!", "https://plchldr.co/i/300x200", "Wagon", 67.540000000000006 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 22, "Make sure to practice", "https://plchldr.co/i/300x200", "Violin", 125.34 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 21, "Wear them under your jeans", "https://plchldr.co/i/300x200", "Underwear", 6.1200000000000001 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 20, "Drink it hot or cold", "https://plchldr.co/i/300x200", "Tea", 18.890000000000001 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 19, "Stay cool this summer", "https://plchldr.co/i/300x200", "Super Soaker", 24.989999999999998 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 18, "Protect your feet", "https://plchldr.co/i/300x200", "Running Shoes", 90.989999999999995 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 17, "Keep warm this winter", "https://plchldr.co/i/300x200", "Quilt", 17.34 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 16, "Tickle the ivories", "https://plchldr.co/i/300x200", "Piano", 225.66 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 15, "The fruit or the color?", "https://plchldr.co/i/300x200", "Orange", 1.8899999999999999 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 14, "Jazz up your digits", "https://plchldr.co/i/300x200", "Nail Polish", 4.5499999999999998 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 13, "In case the ice cream wasn't enough", "https://plchldr.co/i/300x200", "Maple Syrup", 6.7300000000000004 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 12, "Brighten your day", "https://plchldr.co/i/300x200", "Light Bulb", 1.1200000000000001 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 11, "Great for a windy day", "https://plchldr.co/i/300x200", "Kite", 12.529999999999999 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 10, "Wear them on your legs", "https://plchldr.co/i/300x200", "Jeans", 12.529999999999999 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 9, "Satisfy your sweet tooth", "https://plchldr.co/i/300x200", "Ice Cream", 8.9499999999999993 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 8, "Goes with any outfit", "https://plchldr.co/i/300x200", "Hat", 34.289999999999999 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 7, "For all your seeing needs", "https://plchldr.co/i/300x200", "Glasses", 89.0 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 6, "Fun for everyone", "https://plchldr.co/i/300x200", "Frisbee", 3.3300000000000001 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 5, "Erase your mistakes with ease!", "https://plchldr.co/i/300x200", "Eraser", 0.67000000000000004 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 4, "A set of dice", "https://plchldr.co/i/300x200", "Dice", 5.6699999999999999 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 3, "A super fast car", "https://plchldr.co/i/300x200", "Car", 345.0 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 2, "A banana", "https://plchldr.co/i/300x200", "Banana", 2.8500000000000001 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 25, "Sewing, knitting, or weaving", "https://plchldr.co/i/300x200", "Yarn", 4.6699999999999999 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[] { 26, "Really reaching for ideas here", "https://plchldr.co/i/300x200", "Zamboni??", 1001.1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
