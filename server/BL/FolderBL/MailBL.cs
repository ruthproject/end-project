using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using System.Net;
namespace BL.FolderBL
{
    public class MailBL
    {
        public void SendMail(DTO.tables.MailDTO mail)
        {
            using (SmtpClient client = new SmtpClient("smtp.gmail.com", 587))
            {
                MailAddress to = new MailAddress(mail.to);
                //MailAddress to = new MailAddress("est7675251@gmail.com");
                MailAddress from = new MailAddress("esterf.project@gmail.com");

                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential("esterf.project@gmail.com", "project@mail");
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;

                System.Net.Mail.Attachment attachment;

                using (MailMessage message = new MailMessage(from, to))
                {
                    if (mail.attachment != null)
                    {
                        attachment = new System.Net.Mail.Attachment(mail.attachment);
                        //attachment = new System.Net.Mail.Attachment("F:/esty/technut/final1/english.docx");
                        message.Attachments.Add(attachment);
                    }
                    message.Subject = mail.subject;
                    message.IsBodyHtml = true;
                    message.Body = mail.body;

                    try
                    {
                        client.Send(message);
                    }
                    catch (SmtpException smtp)
                    {
                        Console.WriteLine(smtp);
                    }
                }

            }
        }
    }
}
