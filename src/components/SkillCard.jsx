import React from 'react'
import { Typography } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import webdev from "../images/webdev.svg"
const SkillCard = () => {
  return (
    <div>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={webdev}
            alt="webdev-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SkillCard