const APIsite = "https://api.tvmaze.com";

export async function getApi(queryString) {
    const response = await fetch(`${APIsite}${queryString}`).then(r => r.json());
    return response;
}

