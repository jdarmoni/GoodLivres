export const fetchShelvings = () => {

  return $.ajax({
    method: 'get',
    url: '/api/shelving'
  })
}

export const fetchShelving = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/shelving/${id}`
  })
}

export const createShelving = (shelving) => {

  return $.ajax({
    method: 'post',
    url: `/api/shelving`,
    data: { shelving }
  })
}

export const updateShelving = (shelving) => {
  return $.ajax({
    method: 'patch',
    url: `/api/shelving/${shelving.id}`,
    data: { shelving }
  })
}

export const removeShelving = (shelvingId) => {

  return $.ajax({
    method: 'delete',
    url: `api/shelving/${shelvingId}`,
    data: { shelvingId }
  })
}