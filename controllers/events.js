const { request, response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {

    const events = await Event.find().populate('user', 'name');

    res.json({
        ok: true,
        events
    });

};

const createEvent = async (req, res = response) => {

    const event = new Event( req.body );

    try {

        event.user = req.uid;

        const eventSaved = await event.save();

        res.json({
            ok: true,
            eventSaved
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error in create event'
        });
    }

};

const updateEvent = async (req = request, res = response) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {
        
        const event = await Event.findById( eventId );

        if ( !event ) {
            res.status(404).json({
                ok: false,
                msg: 'Event not found'
            });
        };

        if ( event.user.toString() !== uid ) {
            res.status(401).json({
                ok: false,
                msg: 'Not authorized'
            });
        };

        const newEvent = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

        res.json({
            ok: true,
            event: eventUpdated
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error in update event'
        });
    }

};

const deleteEvent = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'deleteEvent'
    });

};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}