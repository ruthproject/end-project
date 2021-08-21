using DAL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public static class Convert
    {
        public static object convert(this object entity)
        {
            string getType = entity.GetType().ToString();

            if (getType.Contains("TAssistant"))
            {
                {
                    TAssistantDTO assistantDTO = new TAssistantDTO();
                    assistantDTO.AssistantId = ((TAssistant)entity).AssistantId;
                    assistantDTO.UserId = ((TAssistant)entity).UserId;
                    assistantDTO.Status = ((TAssistant)entity).Status;
                    //  assistantDTO.TUserDTO =  ((TAssistant)entity).TUser;
                    return assistantDTO;
                }
            }
            else if (getType.Equals("DTO.tables.TAssistantDTO"))

            {
                TAssistant assistantDAL = new TAssistant();
                assistantDAL.AssistantId = ((TAssistantDTO)entity).AssistantId;
                assistantDAL.UserId = ((TAssistantDTO)entity).UserId;
                assistantDAL.Status = ((TAssistantDTO)entity).Status;
                return assistantDAL;
            }

            if (getType.Contains("TUser"))
            {
                {
                    TUserDTO userDTO = new TUserDTO();
                    userDTO.UserId = ((TUser)entity).UserId;
                    userDTO.UserName = ((TUser)entity).UserName;
                    userDTO.FirstName = ((TUser)entity).FirstName;
                    userDTO.LastName = ((TUser)entity).LastName;
                    userDTO.Mail = ((TUser)entity).Mail;
                    userDTO.NumbarPhone = ((TUser)entity).NumbarPhone;
                    userDTO.UserPermissionId = ((TUser)entity).UserPermissionId;
                    userDTO.UserPassword = ((TUser)entity).UserPassword;


                    //  assistantDTO.TUserDTO =  ((TAssistant)entity).TUser;
                    return userDTO;
                }
            }
            else if (getType.Equals("DTO.tables.TUserDTO"))

            {
                TUser userDAL = new TUser();
                userDAL.UserId = ((TUserDTO)entity).UserId;
                userDAL.UserName = ((TUserDTO)entity).UserName;
                userDAL.FirstName= ((TUserDTO)entity).FirstName;
                userDAL.LastName = ((TUserDTO)entity).LastName;
                userDAL.Mail = ((TUserDTO)entity).Mail;
                userDAL.NumbarPhone = ((TUserDTO)entity).NumbarPhone;
                userDAL.UserPermissionId = ((TUserDTO)entity).UserPermissionId;
                userDAL.UserPassword = ((TUserDTO)entity).UserPassword;
                return userDAL;
            }

            return null;
        }
    }
}

