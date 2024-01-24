import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ onSelectCourse }) {
  const [selectedCourse, setSelectedCourse] = useState('');

  const courseList = [
    'Web App Dev',
    'Mobile App',
    'Database Design',
    'Data Structures',
    // Add more courses as needed
  ];

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
    onSelectCourse(event.target.value); // Notify parent component
    console.log("Selected Course === ", selectedCourse )
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="courseName"
          value={selectedCourse}
          label="courseName"
          onChange={handleChange}
        >
          <MenuItem value="">Select a course</MenuItem>
          {courseList.map((course, index) => (
            <MenuItem key={index} value={course}>
              {course}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
