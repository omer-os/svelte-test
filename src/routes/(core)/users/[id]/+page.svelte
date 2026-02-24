<script>
  let { data } = $props();
</script>

<div>
  <p>ID: {data.data.id}</p>
  <p>Name: {data.data.name}</p>
  <p>Username: {data.data.username}</p>
  <p>Email: {data.data.email}</p>
  <p>Phone: {data.data.phone}</p>
  <p>Website: {data.data.website}</p>

  <p>Street: {data.data.address.street}</p>
  <p>Suite: {data.data.address.suite}</p>
  <p>City: {data.data.address.city}</p>
  <p>Zipcode: {data.data.address.zipcode}</p>
  <p>Lat: {data.data.address.geo.lat}</p>
  <p>Lng: {data.data.address.geo.lng}</p>

  <p>Company Name: {data.data.company.name}</p>
  <p>Catch Phrase: {data.data.company.catchPhrase}</p>
  <p>BS: {data.data.company.bs}</p>
</div>
