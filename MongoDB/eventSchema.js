const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventId: { type: String, required: true, unique: true }, // e.g., 'finova', 'visionvault'
    title: { type: String, required: true },
    tagline: { type: String },
    description: { type: String, required: true },
    venue: { type: String },
    time: { type: String }, // e.g., "11:00 AM - 12:00 PM"
    rules: [{ type: String }],
    topics: [{ type: String }], // Optional topics for events like paper presentations
    teamSize: { type: Number, default: 1 }, // 1 for solo, 2 for duo, etc.
    image: { type: String }, // Path to image
    registrationLink: { type: String } // Link to registration page
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
