const Education = require('../models/Education');

// @desc    Get all education records
// @route   GET /api/education
// @access  Public
exports.getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1 });
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single education record
// @route   GET /api/education/:id
// @access  Public
exports.getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education record not found' });
    }
    
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create education record
// @route   POST /api/education
// @access  Public (would typically be Private with auth)
exports.createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update education record
// @route   PUT /api/education/:id
// @access  Public (would typically be Private with auth)
exports.updateEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education record not found' });
    }
    
    const updatedEducation = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete education record
// @route   DELETE /api/education/:id
// @access  Public (would typically be Private with auth)
exports.deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    
    if (!education) {
      return res.status(404).json({ message: 'Education record not found' });
    }
    
    await Education.findByIdAndDelete(req.params.id);
    
    res.status(200).json({ message: 'Education record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 