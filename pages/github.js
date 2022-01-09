import Layout from "../components/Layout";

const github = ({ user }) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
            <p>{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch("https://api.github.com/users/Chino-LexJs");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      user: data,
    },
  };
};

export default github;
