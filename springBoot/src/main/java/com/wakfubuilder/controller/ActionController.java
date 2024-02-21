package com.wakfubuilder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wakfubuilder.model.Action;
import com.wakfubuilder.service.ActionService;

@RestController
public class ActionController {
    
    @Autowired
    private ActionService actionService;

    @GetMapping("/actions")
    public List<Action> getActions() {
        return actionService.getActions();
    }

    @GetMapping("/action/{id}")
    public Action getAction(@PathVariable String id) {
        return actionService.getAction(id);
    }
}
