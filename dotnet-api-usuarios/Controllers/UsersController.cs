using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    static List<User> users = new();

    [HttpGet]
    public IActionResult Get() => Ok(users);

    [HttpPost]
    public IActionResult Post(User user)
    {
        user.Id = users.Count + 1;
        users.Add(user);
        return Ok(user);
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
}
