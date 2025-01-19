export default {
    // Define the document type and its name
    name: 'clothingItem',
    type: 'document',
    title: 'Clothing Item', // The title displayed in the CMS for this document
    fields: [
      {
        // Field for the clothing item's name
        name: 'name',
        type: 'string', // Basic text field
        title: 'Product Name', // Label for the field in the CMS
        validation: (Rule) =>
          Rule.required() // Makes this field mandatory
            .max(100) // Restricts the maximum length to 100 characters
            .error('Product name is required and cannot exceed 100 characters.'),
      },
      {
        // Slug field for generating a URL-friendly identifier
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'URL-friendly identifier for the clothing item.', // Helper text in the CMS
        options: {
          source: 'name', // Automatically generates the slug based on the clothing name
          maxLength: 200, // Limits the slug length
        },
        validation: (Rule) =>
          Rule.required().error('Slug is required for clothing identification.'),
      },
      {
        // Field for a detailed description of the clothing item
        name: 'description',
        type: 'text', // Multi-line text field
        title: 'Description',
        description: 'Detailed description of the clothing item.',
        validation: (Rule) =>
          Rule.required() // Makes this field mandatory
            .min(20) // Requires at least 20 characters
            .max(500) // Limits to a maximum of 500 characters
            .error('Description must be between 20 and 500 characters.'),
      },
      {
        // Field for the clothing item's price
        name: 'price',
        type: 'number', // Numeric field
        title: 'Price',
        validation: (Rule) =>
          Rule.required() // Makes this field mandatory
            .min(0) // Ensures the price is non-negative
            .error('Price must be a positive value.'),
      },
      {
        // Field for available sizes
        name: 'sizes',
        type: 'array',
        title: 'Available Sizes',
        of: [{ type: 'string' }], // Each size is a string
        options: {
          layout: 'tags', // Allows for tag-style input
        },
        description: 'Available sizes for the clothing item (e.g., S, M, L, XL, XXL).',
        validation: (Rule) =>
          Rule.required().min(1).error('At least one size must be specified.'),
      },
      {
        // Field for available colors
        name: 'colors',
        type: 'array',
        title: 'Available Colors',
        of: [{ type: 'string' }], // Each color is a string
        options: {
          layout: 'tags', // Allows for tag-style input
        },
        description: 'Available colors for the clothing item.',
        validation: (Rule) =>
          Rule.required().min(1).error('At least one color must be specified.'),
      },
      {
        // Field for the product image
        name: 'image',
        type: 'image',
        title: 'Clothing Image',
        description: 'High-quality image of the clothing item.',
        options: {
          hotspot: true, // Enables cropping and focal point selection
        },
        validation: (Rule) => Rule.required().error('Clothing image is required.'),
      },
      {
        // Field for the category
        name: 'category',
        type: 'string',
        title: 'Category',
        description: 'Category of the clothing item (e.g., Shirts, Pants, Dresses).',
        options: {
          list: [
            { title: 'Shirts', value: 'shirts' },
            { title: 'Pants', value: 'pants' },
            { title: 'Dresses', value: 'dresses' },
            { title: 'Outerwear', value: 'outerwear' },
            { title: 'Accessories', value: 'accessories' },
          ],
        },
        validation: (Rule) =>
          Rule.required().error('Category is required.'),
      },
      {
        // Array field for tags
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }], // Each tag is a string
        options: {
          layout: 'tags', // Allows for tag-style input
        },
        description: 'Add tags such as "new arrival", "sale", or "limited edition".',
      },
      {
        // Field for the SEO-friendly title
        name: 'seoTitle',
        type: 'string',
        title: 'SEO Title',
        description: 'Title for SEO optimization (max 60 characters).',
        validation: (Rule) => Rule.max(60).error('SEO title cannot exceed 60 characters.'),
      },
      {
        // Field for the SEO-friendly description
        name: 'seoDescription',
        type: 'text',
        title: 'SEO Description',
        description: 'Meta description for SEO optimization (max 160 characters).',
        validation: (Rule) => Rule.max(160).error('SEO description cannot exceed 160 characters.'),
      },
    ],
  };
  