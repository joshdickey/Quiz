

namespace Quizlet.Model
{
    public class AnswerSingleton
    {
        private static AnswerSingleton instance;

        public int green {get; set;}
        public int red {get; set;}
        public int black {get; set;}

        private AnswerSingleton()
        {
            green = 0;
            red = 0;
            black = 0;
        }
         public static AnswerSingleton GetAnswerSingleton()
        {
            if(instance == null)
            {
                instance = new AnswerSingleton();
            }
            return instance;
        }
    }
}
