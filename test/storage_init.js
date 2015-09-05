Tinytest.add('Storage - Init', function(test) {
  // Reset Astronomy.
  reset();

  // Create collection.
  Storages = new Mongo.Collection(null);

  // Remove all previously stored documents.
  Storages.find({}, {
    transform: null
  }).forEach(function(item) {
    Storages.remove(item._id);
  });

  // Class for usage as a nested field.
  NestedCore = Astro.Class({
    name: 'NestedCore',
    fields: {
      'object': {
        type: 'object'
      },
      'array': {
        type: 'array'
      },
      'string': {
        type: 'string'
      },
      'number': {
        type: 'number'
      },
      'boolean': {
        type: 'boolean'
      },
      'date': {
        type: 'date'
      }
    }
  });

  // Define simple class to work with.
  Storage = Astro.Class({
    name: 'Storage',
    collection: Storages,
    fields: {
      'nested': {
        type: 'object',
        class: 'NestedCore'
      },
      'object': {
        type: 'object'
      },
      'array': {
        type: 'array'
      },
      'string': {
        type: 'string'
      },
      'number': {
        type: 'number'
      },
      'boolean': {
        type: 'boolean'
      },
      'date': {
        type: 'date'
      }
    }
  });
});
