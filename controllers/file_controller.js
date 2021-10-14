// const firebase_config = require("../firebase/firebase_config");
// const admin = require("firebase-admin");

// require("firebase/storage"); // must be required for this to work
// const app = admin.initializeApp(firebase_config.firebaseConfig);
// const storage = admin.storage();
// const storageRef = storage.ref();
// const bucket = storage.bucket(firebase_config.firebaseConfig.storageBucket); // create a reference to storage
const fileController = {
  uploadImage: async (req, res) => {
    // try {
    // Grab the file
    //   const file = req.file;
    //   console.log("print file", file);
    //   // Format the filename
    //   const timestamp = Date.now();
    //   const name = file.originalname.split(".")[0];
    //   const type = file.originalname.split(".")[1];
    //   const fileName = `${name}_${timestamp}.${type}`;
    //   // Step 1. Create reference for file name in cloud storage
    //   var destination = "uploads/12345/full.jpg";
    //   const response = await bucket.upload(fileName, {
    //     public: true,
    //     destination: destination,
    //   });
    //   console.log(response);
    //   // const imageRef = storage.child(fileName);
    //   // Step 2. Upload the file in the bucket storage
    //   // const snapshot = await imageRef.put(file.buffer);
    //   // Step 3. Grab the public url
    //   // const downloadURL = await snapshot.ref.getDownloadURL();
    //   res.send("Hello");
    // } catch (error) {
    //   console.log(error);
    //   res.status(400).send(error.message);
    // }
  },
};

module.exports = fileController;
