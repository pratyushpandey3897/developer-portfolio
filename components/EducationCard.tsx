import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import { EducationType } from '../types/sections';
import Fade from 'react-reveal/Fade';

const EducationCard = ({
  schoolName,
  companyLogo,
  subHeader,
  duration,
  desc,
  grade,
  descBullets,
}: EducationType) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover  text-center shadow mt-4">
        <CardBody> 
        <img
              src={companyLogo}
              style={{
                objectFit: 'contain',
                left: 0,
                right: 0,
                top: '7rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '8rem',
                height: '8rem',
                borderRadius: '0%',
              }}
              className=""
              alt={companyLogo}
            />
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{schoolName}</h5>
              <h6>{subHeader}</h6>
              <Badge color="info" className="mr-1">
                {duration}
              </Badge>
              {grade && (
                <Badge color="primary" className="mr-1">
                  {grade}
                </Badge>
              )}
              <p className="description mt-3">{desc}</p>
              <ul>
                {descBullets
                  ? descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
