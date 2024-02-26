import { Grid, Paper, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import useBooks, { TBook } from "./useBook";
import { ChangeEvent } from "react";

const typoStyle = {
  pt: 2,
  display: "flex",
  justifyContent: "space-between",
};

export default function BookCard() {
  const [books, , deleteBook, addImage] = useBooks();
  return (
    <>
      {books &&
        (books as TBook[]).map((book: TBook) => {
          return (
            <Grid key={book.id} item xs={12} sm={6} md={4}>
              <Paper elevation={2} sx={{ padding: 2 }}>
                {book.imageURL && (
                  <img
                    src={book.imageURL}
                    alt={book.title}
                    style={{ maxWidth: "100%" }}
                  />
                )}
                <Typography variant="h5" component="h3" sx={typoStyle}>
                  Title: <span>{book.title}</span>
                </Typography>
                <Typography variant="h5" component="h3" sx={typoStyle}>
                  Title: <span>{book.author}</span>
                </Typography>
                <Typography variant="h5" component="h3" sx={typoStyle}>
                  Title: <span>{book.pages}</span>
                </Typography>
                <Typography variant="h5" component="h3" sx={typoStyle}>
                  Title: <span>{book.read ? "read" : "not read"}</span>
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 30,
                    borderTop: ".5px solid #333",
                  }}
                >
                  <IconButton color="primary" component="label">
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) =>
                        (
                          addImage as (
                            e: ChangeEvent<HTMLInputElement>,
                            book: TBook
                          ) => void
                        )(e, book)
                      }
                    ></input>
                    <AddPhotoAlternateIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    component="button"
                    onClick={(e) => e.preventDefault()}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    component="button"
                    color="primary"
                    onClick={() => (deleteBook as (book: TBook) => void)(book)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Paper>
            </Grid>
          );
        })}
    </>
  );
}
