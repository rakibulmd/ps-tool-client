import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography
  } from "@material-tailwind/react";

  export default function SolutionCard({img, headline, description}) {
    return (
      <Card className="mt-6 w-80">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={img}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {headline}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardBody>
      </Card>
    );
  }

  SolutionCard.propTypes = {
    img: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };