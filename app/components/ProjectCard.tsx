"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, Button, Image, Skeleton } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function ProjectCard({ projectName, projectDescription, projectId }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsLoaded(true);
            observer.disconnect();
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <Card
      className="p-4 w-fit max-w-[450px] h-full max-h-[300px] flex flex-col items-left justify-start"
      ref={elementRef}
    >
      <CardHeader className="flex flex-col items-start gap-5">
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <h4 className="font-semibold text-large text-left">{projectName}</h4>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <p className="w-full text-default-500 text-left text-sm">
            {projectDescription}
          </p>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} className="rounded-lg">
          <Button
            onClick={() => router.push(`/projects/${projectId}`)}
            color="primary"
            size="sm"
            className="text-sm"
          >
            View Details
          </Button>
        </Skeleton>
      </CardHeader>
    </Card>
  );
}
