import React from 'react';
import {IoIosArrowDown} from 'react-icons/io'
import './course.css';

const CourseList = ({name=''}) => (
    <div className='course-list-container'>
        <div className='text'>
            {name}
        </div>
        <IoIosArrowDown/>
    </div>
);

const Course = () => (
    <div className='container'>
        <CourseList name='Capitulo 1: Introduccion a los mercados' />
        <CourseList name='Capitulo 2: Que es el trading?' />
        <CourseList name='Capitulo 3: Psicologia del trading' />
    </div>);

export default Course;
