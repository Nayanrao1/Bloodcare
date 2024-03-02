import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    Doc_name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    Doc_edu: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Doc_spl: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Doc_exp: {
      type: Number,
      default: 0,
    },
    Doc_lang: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);
