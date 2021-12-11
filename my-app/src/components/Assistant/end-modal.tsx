import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HelpLogin from '../../index.login';
import Api from '../../Api';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, currentAssistantId, startHour, currentProjectId }: { open: boolean, setOpen: any, currentAssistantId: number, startHour: any, currentProjectId: number }) {
  const submit = async () => {
    if (valuePercentage.percentage > 0) {
      const body = { AssistantId: currentAssistantId, BeginningTime: startHour, EndTime: new Date(), ProjectId: currentProjectId, finishPercentage: valuePercentage.percentage }
      await Api({ url: 'AssistantHours', method: 'POST', body: body })
    }
    else
      alert(' לא הכנסת ערך')
  }
  
  const [updatePercentage, submitEnd, valuePercentage] = HelpLogin(
    {
      percentage: 0
    }
    , submit
  )
  const handleClose = () => setOpen(false);

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            שניה לפני שמסימים
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            כמה אחוזים התקדמנו ?
            <input type="number"
              placeholder='כמה אחוזים כבר עשינו בפרויקט'
              name='percentage'
              min='0'
              onChange={updatePercentage}
              value={valuePercentage.percentage}
            />
            <button onClick={submitEnd}>ok</button>

          </Typography>

        </Box>

      </Modal>

    </div>
  );
}
