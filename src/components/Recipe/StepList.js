import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSteps } from "../../redux/Actions/recipeActions";

const StepList = ({ status }) => {
  const steps = useSelector((state) => state.recipe.steps);
  const dispatch = useDispatch();
  const [newStep, setNewStep] = useState("");
  const [editingStep, setEditingStep] = useState(-1);
  const [editingStepText, setEditingStepText] = useState("");

  const onNewStepChange = (e) => {
    setNewStep(e.target.value);
  };

  const onNewStepKeyDown = (e) => {
    if (e.keyCode === 13 && newStep !== "") {
      dispatch(updateSteps([...steps, newStep]));
      setNewStep("");
    }
  };

  const onStepChange = (e) => {
    setEditingStepText(e.target.value);
  };

  const onStepKeyDown = (e) => {
    if (e.keyCode === 13 && editStepText !== "") {
      editStepText(parseInt(e.target.name));
    }
  };

  const editStepText = (i) => {
    const newSteps = [...steps];
    newSteps[i] = editingStepText;
    dispatch(updateSteps(newSteps));
    setEditingStep(-1);
  };

  return (
    <>
      {steps.map((s, i) => {
        return (
          <Accordion defaultExpanded="true">
            <AccordionSummary>Step {i + 1}</AccordionSummary>
            <AccordionDetails>
              {editingStep === i ? (
                <div>
                  <TextField
                    name={i}
                    onChange={onStepChange}
                    onKeyDown={onStepKeyDown}
                    value={editingStepText}
                  />
                </div>
              ) : (
                <Typography>{s}</Typography>
              )}
            </AccordionDetails>
            {status === "create" && (
              <AccordionActions>
                {editingStep !== i ? (
                  <Button
                    onClick={() => {
                      setEditingStepText(s);
                      setEditingStep(i);
                    }}
                  >
                    Edit
                  </Button>
                ) : (
                  <Button onClick={() => editStepText(i)}>Done</Button>
                )}
              </AccordionActions>
            )}
          </Accordion>
        );
      })}
      {status === "create" && (
        <TextField
          name="step"
          onChange={onNewStepChange}
          onKeyDown={onNewStepKeyDown}
          value={newStep}
        />
      )}
    </>
  );
};

export default StepList;
