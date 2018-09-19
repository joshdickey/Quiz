using Microsoft.AspNetCore.Mvc.RazorPages;
using Quizlet.Model;

namespace Quizlet.Pages
{
    public class IndexModel : PageModel
    {
        public AnswerSingleton Data;
        public void OnGet()
        {
            Data = AnswerSingleton.GetAnswerSingleton();

        }
    }
}
