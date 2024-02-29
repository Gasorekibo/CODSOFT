import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
//   coverLetter: {
//     type: String,
//     required: true
//   },
  resume: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'accepted', 'rejected'],
    default: 'pending'
  },
  notes: {
    type: String
  }
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
