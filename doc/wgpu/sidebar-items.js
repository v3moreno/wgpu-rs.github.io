initSidebarItems({"constant":[["BIND_BUFFER_ALIGNMENT","Bound uniform/storage buffer offsets must be aligned to this number."],["COPY_BUFFER_ALIGNMENT","Buffer to buffer copy as well as buffer clear offsets and sizes must be aligned to this number."],["COPY_BYTES_PER_ROW_ALIGNMENT","Buffer-Texture copies must have `bytes_per_row` aligned to this number."],["MAP_ALIGNMENT","Size to align mappings."],["PUSH_CONSTANT_ALIGNMENT","Alignment all push constants need"],["QUERY_SET_MAX_QUERIES","Maximum queries in a query set"],["QUERY_SIZE","Size of a single piece of query data."],["VERTEX_STRIDE_ALIGNMENT","Vertex buffer strides have to be aligned to this number."]],"enum":[["AddressMode","How edges should be handled in texture addressing."],["Backend","Backends supported by wgpu."],["BindingResource","Resource that can be bound to a pipeline."],["BindingType","Specific type of a binding."],["BlendFactor","Alpha blend factor."],["BlendOperation","Alpha blend operation."],["BufferBindingType","Specific type of a buffer binding."],["CompareFunction","Comparison function used for depth and stencil operations."],["DeviceType","Supported physical device types."],["Error","Error type"],["Face","Face of a vertex."],["FilterMode","Texel mixing mode when sampling between texels."],["FrontFace","Winding order which classifies the “front” face."],["IndexFormat","Format of indices used with pipeline."],["InputStepMode","Rate that determines when vertex data is advanced."],["LoadOp","Operation to perform to the output attachment at the start of a renderpass."],["Maintain","Passed to [`Device::poll`] to control if it should block or not. This has no effect on the web."],["MapMode","Type of buffer mapping."],["PolygonMode","Type of drawing mode for polygons"],["PowerPreference","Power Preference when choosing a physical adapter."],["PresentMode","Behavior of the presentation engine based on frame rate."],["PrimitiveTopology","Primitive type the input mesh is composed of."],["QueryType","Type of query contained in a QuerySet."],["SamplerBorderColor","Color variation to use when sampler addressing mode is [`AddressMode::ClampToBorder`]"],["ShaderModel","Collections of shader features a device supports if they support less than WebGPU normally allows."],["ShaderSource","Source of a shader module."],["StencilOperation","Operation to perform on the stencil value."],["StorageTextureAccess","Specific type of a sample in a texture binding."],["SwapChainError","Result of an unsuccessful call to [`SwapChain::get_current_frame`]."],["SwapChainStatus","Status of the recieved swapchain image."],["TextureAspect","Kind of data the texture holds."],["TextureDimension","Dimensionality of a texture."],["TextureFormat","Underlying texture data format."],["TextureSampleType","Specific type of a sample in a texture binding."],["TextureViewDimension","Dimensions of a particular texture view."],["VertexFormat","Vertex Format for a Vertex Attribute (input)."]],"macro":[["include_spirv","Macro to load a SPIR-V module statically."],["include_wgsl","Macro to load a WGSL module statically."],["vertex_attr_array","Macro to produce an array of VertexAttribute."]],"mod":[["util","Utility structures and functions."]],"struct":[["Adapter","Handle to a physical graphics and/or compute device."],["AdapterInfo","Information about an adapter."],["BackendBit","Represents the backends that wgpu will use."],["BindGroup","Handle to a binding group."],["BindGroupDescriptor","Describes a group of bindings and the resources to be bound."],["BindGroupEntry","Bindable resource and the slot to bind it to."],["BindGroupLayout","Handle to a binding group layout."],["BindGroupLayoutDescriptor","Describes a [`BindGroupLayout`]."],["BindGroupLayoutEntry","Describes a single binding inside a bind group."],["BlendComponent","Describes the blend component of a pipeline."],["BlendState","Describe the blend state of a render pipeline."],["Buffer","Handle to a GPU-accessible buffer."],["BufferAsyncError","Error occurred when trying to async map a buffer."],["BufferBinding","Describes the segment of a buffer to bind."],["BufferSlice","Slice into a [`Buffer`]."],["BufferUsage","Different ways that you can use a buffer."],["BufferView","Read only view into a mapped buffer."],["BufferViewMut","Write only view into mapped buffer."],["Color","RGBA double precision color."],["ColorTargetState","Describes the color state of a render pipeline."],["ColorWrite","Color write mask. Disabled color channels will not be written to."],["CommandBuffer","Handle to a command buffer on the GPU."],["CommandBufferDescriptor","Describes a [`CommandBuffer`]."],["CommandEncoder","Encodes a series of GPU operations."],["ComputePass","In-progress recording of a compute pass."],["ComputePassDescriptor","Describes the attachments of a compute pass."],["ComputePipeline","Handle to a compute pipeline."],["ComputePipelineDescriptor","Describes a compute pipeline."],["DepthBiasState","Describes the biasing setting for the depth target."],["DepthStencilState","Describes the depth/stencil state in a render pipeline."],["Device","Open connection to a graphics and/or compute device."],["DownlevelCapabilities","Lists various ways the underlying platform does not conform to the WebGPU standard."],["DownlevelFlags","Binary flags listing various ways the underlying platform does not conform to the WebGPU standard."],["Extent3d","Extent of a texture related operation."],["Features","Features that are not guaranteed to be supported."],["FragmentState","Describes the fragment process in a render pipeline."],["ImageCopyBufferBase","View of a buffer which can be used to copy to/from a texture."],["ImageCopyTextureBase","View of a texture which can be used to copy to/from a buffer/texture."],["ImageDataLayout","Layout of a texture in a buffer’s memory."],["Instance","Context for all other wgpu objects. Instance of wgpu."],["Limits","Represents the sets of limits an adapter/device supports."],["MultisampleState","Describes the multi-sampling state of a render pipeline."],["Operations","Pair of load and store operations for an attachment aspect."],["Origin3d","Origin of a copy to/from a texture."],["PipelineLayout","Handle to a pipeline layout."],["PipelineLayoutDescriptor","Describes a pipeline layout."],["PipelineStatisticsTypes","Flags for which pipeline data should be recorded."],["PrimitiveState","Describes the state of primitive assembly and rasterization in a render pipeline."],["PushConstantRange","A range of push constant memory to pass to a shader stage."],["QuerySet","Handle to a query set."],["Queue","Handle to a command queue on a device."],["RenderBundle","Pre-prepared reusable bundle of GPU operations."],["RenderBundleEncoder","Encodes a series of GPU operations into a reusable “render bundle”."],["RenderBundleEncoderDescriptor","Describes a [`RenderBundleEncoder`]."],["RenderPass","In-progress recording of a render pass."],["RenderPassColorAttachment","Describes a color attachment to a [`RenderPass`]."],["RenderPassDepthStencilAttachment","Describes a depth/stencil attachment to a [`RenderPass`]."],["RenderPassDescriptor","Describes the attachments of a render pass."],["RenderPipeline","Handle to a rendering (graphics) pipeline."],["RenderPipelineDescriptor","Describes a render (graphics) pipeline."],["RequestAdapterOptionsBase","Options for requesting adapter."],["RequestDeviceError","Requesting a device failed."],["Sampler","Handle to a sampler."],["SamplerDescriptor","Describes a [`Sampler`]"],["ShaderModule","Handle to a compiled shader module."],["ShaderModuleDescriptor","Descriptor for a shader module."],["ShaderStage","Describes the shader stages that a binding will be visible from."],["StencilFaceState","Describes stencil state in a render pipeline."],["StencilState","State of the stencil operation (fixed-pipeline stage)."],["Surface","Handle to a presentable surface."],["SwapChain","Handle to a swap chain."],["SwapChainDescriptor","Describes a [`SwapChain`]."],["SwapChainFrame","Result of a successful call to [`SwapChain::get_current_frame`]."],["SwapChainTexture","Swap chain image that can be rendered to."],["Texture","Handle to a texture on the GPU."],["TextureFormatFeatureFlags","Feature flags for a texture format."],["TextureFormatFeatures","Features supported by a given texture format"],["TextureUsage","Different ways that you can use a texture."],["TextureView","Handle to a texture view."],["TextureViewDescriptor","Describes a [`TextureView`]."],["VertexAttribute","Vertex inputs (attributes) to shaders."],["VertexBufferLayout","Describes how the vertex buffer is interpreted."],["VertexState","Describes the vertex process in a render pipeline."]],"trait":[["UncapturedErrorHandler","Type for the callback of uncaptured error handler"]],"type":[["BufferAddress","Integral type used for buffer offsets."],["BufferDescriptor","Describes a [`Buffer`]."],["BufferSize","Integral type used for buffer slice sizes."],["CommandEncoderDescriptor","Describes a [`CommandEncoder`]."],["DeviceDescriptor","Describes a [`Device`]."],["DynamicOffset","Integral type used for dynamic bind group offsets."],["ImageCopyBuffer","View of a buffer which can be used to copy to/from a texture."],["ImageCopyTexture","View of a texture which can be used to copy to/from a buffer/texture."],["Label","Object label."],["QuerySetDescriptor","Describes a [`QuerySet`]."],["RenderBundleDescriptor","Describes a [`RenderBundle`]."],["RequestAdapterOptions","Additional information required when requesting an adapter."],["ShaderLocation","Integral type used for binding locations in shaders."],["TextureDescriptor","Describes a [`Texture`]."]]});