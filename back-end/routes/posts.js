const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');
const connectDb = require('../models/db');

// Endpoint GET để lấy danh sách bài đăng
router.get('/', async (req, res) => {
  try {
    const db = await connectDb();
    const postCollection = db.collection('posts');
    const posts = await postCollection.find().toArray();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint PUT để cập nhật số lượt thích của bài đăng
router.put('/:id/like', async (req, res) => {
  try {
    const { id } = req.params;
    const { like } = req.body; 

    
    const db = await connectDb();
    const postCollection = db.collection('posts');

    
    const result = await postCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { like: like } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Trả về bài đăng đã cập nhật
    const updatedPost = await postCollection.findOne({ _id: new ObjectId(id) });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating post like:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
