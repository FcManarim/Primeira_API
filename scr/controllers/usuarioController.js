import mongoose from "mongoose";
import { UsuarioSchema } from "../models/bookModel";

const Usuario = mongoose.model("Usuario", UsuarioSchema);


export const addNewUser = (req, res) => {
  let newUser = new Usuario(req.body);

  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

export const getUsers = (req, res) => {
  // {} vai buscar tudo que tem no banco, não especificou um ID
  Usuario.find({}, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

export const getUserId = (req, res) => {
  Usuario.findById(req.params.userId, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

export const updateUser = (req, res) => {
  Usuario.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    }
  );
};

export const removeUser = (req, res) => {
  Usuario.remove({ _id: req.params.userId }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Data deleted successfully!" });
  });
};
