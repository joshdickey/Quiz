using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Quizlet.Model;

namespace Quizlet.Hubs
{
    public class AnswerHub : Hub
    {
        public async Task SendAnswer(int answer)
        {
            AnswerSingleton answers = AnswerSingleton.GetAnswerSingleton();
            
            if(answer == 0)
            {
                answers.green++;
            }
            if (answer == 1)
            {
                answers.red++;
            }
            if (answer == 2)
            {
                answers.black++;
            }

            var green = answers.green;
            var red = answers.red;
            var black = answers.black;
            await Clients.All.SendAsync("ReceiveMessage", green, red, black);
        }
    }
}
