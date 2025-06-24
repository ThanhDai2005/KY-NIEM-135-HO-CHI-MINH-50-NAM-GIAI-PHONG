import { motion } from "framer-motion";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function QuizResult({
  open,
  onClose,
  score,
  totalQuestions,
  userAnswers,
  questions,
  onShare,
}) {
  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-red-900";
    if (progress >= 60) return "bg-red-700";
    if (progress >= 40) return "bg-red-500";
    return "bg-red-100";
  };

  return (
    <>
      <Dialog onClose={onClose} open={open}>
        <h3>Modal title</h3>
        <IconButton
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <div>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </div>
          <div>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </div>
          <div>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={onClose}>Save changes</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default QuizResult;
