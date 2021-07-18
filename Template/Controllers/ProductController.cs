using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Template.Models;

namespace Template.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public ActionResult<Products> GetProducts()
        {
            var result = new Products()
            {
                Id = 1,
                Name = "Laptop"
            };
            return Ok(result);
        }
    }
}