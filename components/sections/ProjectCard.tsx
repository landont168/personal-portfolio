import * as React from "react";
import { Project } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.name}`}>
      <Card className="relative overflow-hidden group hover:brightness-90">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-64">
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="rounded transition-transform duration-300 ease-in-out group-hover:scale-105"
              fill
              sizes="100%"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
