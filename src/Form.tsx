import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Checkbox,
  DialogContentText,
} from "@mui/material";
import { ChangeEvent } from "react";
import useBooks, { TBook } from "./useBook";

interface Props {
  open: boolean;
  handleClose: () => void;
  formData?: {
    title: string;
    author: string;
    pages: number;
    read: boolean;
  };
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({
  open,
  handleClose,
  formData,
  handleChange,
}: Props) {
  const [, addBook, , , editBook] = useBooks();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Book</DialogTitle>
      <DialogContent>
        <DialogContentText>Add a Book to the Bookshelf</DialogContentText>
        <TextField
          required
          autoFocus
          margin="dense"
          id="title"
          label="Book Title"
          type="text"
          fullWidth
          variant="standard"
          value={formData!.title}
          onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
        />
        <TextField
          required
          autoFocus
          margin="dense"
          id="author"
          label="Author"
          type="text"
          fullWidth
          variant="standard"
          value={formData!.author}
          onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
        />
        <TextField
          required
          margin="dense"
          id="pages"
          label="Pages"
          type="number"
          fullWidth
          variant="standard"
          value={formData!.pages}
          onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
        />
        <FormControlLabel
          control={<Checkbox />}
          id="read"
          label="Read?"
          value={formData!.read}
          onChange={(e) => handleChange(e as ChangeEvent<HTMLInputElement>)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            formData
              ? (editBook as (book: TBook) => Promise<void>)(formData as TBook)
              : (addBook as (book: TBook) => Promise<void>)(formData! as TBook);

            //handleClose();
          }}
        >
          Add Book
        </Button>
      </DialogActions>
    </Dialog>
  );
}
