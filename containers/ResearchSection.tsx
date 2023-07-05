import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import {
  Button,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { researchSection } from '../portfolio';

const ResearchSection = () => {
  return (
    researchSection && (
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{researchSection.title}</h1>
        <p className="lead">{researchSection.subTitle}</p>
        {researchSection.data.map((section, index) => {
          return (
            <Row className="my-5" key={index}>
              <Col lg="6" className="order-2 order-lg-1">
                <Fade left duration={2000}>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Fade>
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <Fade right duration={2000}>
                  {/* <h3 className="h3 mb-2">{section.title}</h3> */}

                  <CardBody className="">
                    <img
                      src="/img/icons/common/asu-logo.webp"
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
                      alt="/img/icons/common/asu-logo.webp"
                    />
                    <CardTitle tag="h4" className="mb-2">
                      {section.title}
                    </CardTitle>
                    <div className="d-flex justify-content-center flex-wrap mb-2">
                      {section.softwareSkills.map((skill, i) => {
                        return (
                          <Fragment key={i}>
                            <div
                              className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                              id={skill.skillName.replace(/\s/g, '')}
                            >
                              <Icon
                                icon={skill.fontAwesomeClassName}
                                data-inline="false"
                              ></Icon>
                            </div>
                            <UncontrolledTooltip
                              delay={0}
                              placement="bottom"
                              target={skill.skillName.replace(/\s/g, '')}
                            >
                              {skill.skillName}
                            </UncontrolledTooltip>
                          </Fragment>
                        );
                      })}
                    </div>
                    <CardText tag="div" className="description my-3 text-left">
                      {/* {section.skills[0]} */}
                      <ul>
                        {section.skills
                          ? section.skills.map((desc,i) => {
                              return <li key={i}>{desc}</li>;
                            })
                          : null}
                      </ul>
                      <div className="d-flex justify-content-center flex-wrap mb-2">
                        <Button
                          className="btn-icon"
                          color="info"
                          href="https://atlanteansdex.netlify.app/"
                          target="_blank"
                          rel="noopener"
                          aria-label="Twitter"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-arrow-right mr-2" />
                          </span>
                          <span className="nav-link-inner--text ml-1">
                            Check the Application!
                          </span>
                        </Button>
                      </div>
                    </CardText>
                  </CardBody>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default ResearchSection;
