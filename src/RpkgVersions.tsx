import React from "react"

export interface RpkgVersion {
    id: string
    changelog: React.ReactElement
}

export const latest: RpkgVersion = {
    id: "2.9",
    changelog: (
        <ul>
            <li>
                HITMAN 3 export Models + Textures linked to a TEMP:
                <ul>
                    <li>
                        GUI:
                        <ul>
                            <li>
                                Exporting:
                                <ul>
                                    <li>
                                        Right click a TEMP hash and select
                                        “Extract PRIM Models Linked To
                                        00123456789ABCDE.TEMP to GLB/TGA
                                        file(s)”.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Reimporting:
                                <ul>
                                    <li>
                                        Rebuild menu: “Rebuild Primitive Models
                                        (PRIM/TEXT/TEXD) From Folder” (RPKG(s)
                                        archive(s) will also automatically
                                        generate).
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        CLI:
                        <ul>
                            <li>
                                -extract_all_prim_model_of_temp_from and
                                -rebuild_prim_model_in.
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Added error handling to the GUI when rebuilding PRIMs.</li>
            <li>
                Added interactive mode to rpkg-cli which can be access using the
                -i argument.
            </li>
        </ul>
    ),
}

export const versions: RpkgVersion[] = [latest]
