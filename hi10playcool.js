function toggleDisplayNone(id) {
    const el = document.getElementById(id)
    el.style.display = el.style.display == 'none' ? '' : 'none'
}

jQuery(() => {
    jQuery('.alt-options').on('click', (ev) => {
        const altOption = ev.target
        const blockId = altOption.dataset.blockid
        const altId = altOption.dataset.altid

        jQuery(altOption).fadeTo('fast', 1.0)
        jQuery(altOption).siblings().fadeTo('fast', 0.4)

        jQuery(`#blockbody-${blockId} .altpane`).hide()
        jQuery(`#blockbody-${blockId} #${altId}pane`).slideDown('slow')
    })
    jQuery('.alt-options > *:first-child').click()
})
