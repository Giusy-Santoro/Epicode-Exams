import { Dropdown, Button } from 'react-bootstrap';

const TVShowsSection = ({ genre }) => {
  return (
    <div className="container-fluid ">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <Dropdown className="ml-4 mt-1">
            <Dropdown.Toggle
              variant="outline-secondary"
              id="dropdown-basic"
              className="btn-sm rounded-0 ms-4"
            >
              Genres &nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-dark">
              <Dropdown.Item className="text-white bg-dark" href="#">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item className="text-white bg-dark" href="#">
                Drama
              </Dropdown.Item>
              <Dropdown.Item className="text-white bg-dark" href="#">
                Thriller
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
      
    </div>
  );
};

export default TVShowsSection;
