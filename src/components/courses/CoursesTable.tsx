
import React from 'react';
import { Course } from '@/contexts/DataContext';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CoursesTableProps {
  courses: Course[];
  selectedStream: string | null;
}

const CoursesTable: React.FC<CoursesTableProps> = ({ courses, selectedStream }) => {
  const streamLabel = selectedStream || 'All Streams';
  
  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption>{streamLabel} Courses</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Course Name</TableHead>
            <TableHead>Stream</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="hidden md:table-cell">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id} className="hover:bg-muted/50 cursor-pointer">
              <TableCell className="font-medium">{course.title}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {course.streams.map(stream => (
                    <span key={stream} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                      {stream}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell>{course.duration}</TableCell>
              <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                <span className="line-clamp-1">{course.description}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CoursesTable;
